"use client"

import { SiteHeader } from "@/components/site-header"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Zoho form script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          var ifrmSrc = 'https://forms.zohopublic.com/inforamalaks1/form/ScholarshipApplicationForm/formperma/7stY5gVx-d6NFxKDguwDxGDqgRSqxHDvGu6-pyQRKrc?zf_rszfm=1';
          
          try{
            if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ) {
                    if(ifrmSrc.indexOf('?') > 0){
                         ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                        ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
            if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ){
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
          }catch(e){}
          
          f.src = ifrmSrc;
          f.style.border="none";
          f.style.height="2264px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.setAttribute("aria-label", 'Scholarship Application Form');
          
          var d = document.getElementById("zf_div_7stY5gVx-d6NFxKDguwDxGDqgRSqxHDvGu6-pyQRKrc");
          if(d) {
            d.appendChild(f);
          }
          
          window.addEventListener('message', function (event){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("zf_div_7stY5gVx-d6NFxKDguwDxGDqgRSqxHDvGu6-pyQRKrc").getElementsByTagName("iframe")[0];
                if ( iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                  var prevIframeHeight = iframe.style.height;
                  var zf_tout = false;
                  if( zf_ifrm_data.length == 3 ) {
                      iframe.scrollIntoView();
                      zf_tout = true;
                  }
                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) {
                        setTimeout(function(){
                            iframe.style.height = zf_ifrm_ht_nw;
                        },500);
                    } else {
                        iframe.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          }, false);
        }catch(e){}
      })();
    `

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-8 md:py-12 px-4">
        <div className="container max-w-4xl">
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold">Apply for Scholarship</h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Please fill out the form below with accurate information to help us understand how we can support your
              educational journey.
            </p>
          </div>

          {/* Zoho Form Container */}
          <div className="w-full flex justify-center">
            <div id="zf_div_7stY5gVx-d6NFxKDguwDxGDqgRSqxHDvGu6-pyQRKrc" className="w-full max-w-3xl"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
