"use client"

import { SiteHeader } from "@/components/site-header"
import { useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SupportPage() {
  useEffect(() => {
    // Load the Zoho form script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          
          var ifrmSrc = 'https://forms.zohopublic.com/inforamalaks1/form/SupportFormforRamalakshmiKumarTrust/formperma/N0NeUch8r5agacap8WfMFAnjWnpNaClaankSbHXJ46E?zf_rszfm=1';
          
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
          f.style.height="2828px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.setAttribute("aria-label", 'Support Form for Ramalakshmi Kumar Trust');
          
          var d = document.getElementById("zf_div_N0NeUch8r5agacap8WfMFAnjWnpNaClaankSbHXJ46E");
          if(d) {
            d.appendChild(f);
          }
          window.addEventListener('message', function (){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("zf_div_N0NeUch8r5agacap8WfMFAnjWnpNaClaankSbHXJ46E").getElementsByTagName("iframe")[0];
                if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
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
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-8 md:py-12 px-4">
        <div className="container max-w-3xl">
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold">Support the Trust</h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Your support helps us continue Smt. Ramalakshmi Kumar's legacy of empowering talented students through
              education.
            </p>
          </div>

          {/* Transparency pledge */}
          <div className="mb-8 rounded-xl border border-[#C9A84C]/30 bg-[#FFF9EF] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
              Our Pledge
            </p>
            <h2 className="font-playfair text-xl font-bold text-[#181818] mb-4">
              100% Transparency — Always
            </h2>
            <div className="space-y-3 text-sm md:text-base text-[#434343]">
              <p>
                Every rupee you donate is carefully tracked and we provide detailed reports on how funds are
                utilised.
              </p>
              <p>
                <strong className="text-[#181818]">We do NOT make direct payments to individuals.</strong>{" "}
                All financial support is made directly to verified educational institutions or registered
                welfare entities — fully documented.
              </p>
              <p>
                You can request detailed expense reports and fund utilisation details at any time by
                contacting us at{" "}
                <a
                  href="mailto:info@ramalakshmikumar.com"
                  className="text-[#C9A84C] hover:underline"
                >
                  info@ramalakshmikumar.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mb-8 p-6 md:p-8 rounded-lg border bg-card shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold mb-6">Bank Account Details</h2>
            <div className="grid gap-4 md:gap-6">
              <div className="border-b pb-4">
                <p className="text-sm text-muted-foreground">Bank Name</p>
                <p className="font-semibold text-lg">HDFC Bank, Kelambakkam Branch</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-sm text-muted-foreground">Account Number</p>
                <p className="font-semibold text-lg">50200114105944</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-sm text-muted-foreground">IFSC Code</p>
                <p className="font-semibold text-lg">HDFC0002075</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-sm text-muted-foreground">MICR Code</p>
                <p className="font-semibold text-lg">784240102</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-sm text-muted-foreground">Customer ID</p>
                <p className="font-semibold text-lg">335906317</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trustee Name</p>
                <p className="font-semibold text-lg">Kumar B</p>
                <p className="text-sm text-muted-foreground">Retired Educator, SSN MBA Department</p>
                <p className="text-sm text-[#C9A84C] font-medium">Managing Trustee</p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <div id="zf_div_N0NeUch8r5agacap8WfMFAnjWnpNaClaankSbHXJ46E" className="w-full" />
          </div>
        </div>
      </main>
    </div>
  )
}
