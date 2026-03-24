'use client'

import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"

export default function ContactUsPage() {
  useEffect(() => {
    // Load the Zoho form script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          var ifrmSrc = 'https://forms.zohopublic.com/inforamalaks1/form/RamalakshmiKumarTrustContactInformationForm/formperma/K3-HSvp28-ghMGM0NDRQiv-6sDJZreHjujhDLc-uJGU?zf_rszfm=1';
          
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
          f.style.height="2677px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.setAttribute("aria-label", 'Ramalakshmi Kumar Trust Contact Information Form');
          
          var d = document.getElementById("zf_div_K3-HSvp28-ghMGM0NDRQiv-6sDJZreHjujhDLc-uJGU");
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
                var iframe = document.getElementById("zf_div_K3-HSvp28-ghMGM0NDRQiv-6sDJZreHjujhDLc-uJGU").getElementsByTagName("iframe")[0];
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
        <div className="container max-w-4xl">
          <div className="mb-8 md:mb-12 text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-06%20at%2010.05.42-Ae8wlG3M6XpD6kS4LtgJQw5tw94WkI.png"
              alt="Ramalakshmi Kumar Trust Logo"
              width={120}
              height={120}
              className="mx-auto mb-6 h-20 w-auto md:h-auto"
              priority
            />
            <h1 className="font-playfair text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help and answer any questions you might have about the Ramalakshmi Kumar Trust.
            </p>
          </div>

          {/* Zoho Contact Form */}
          <div className="mb-12 flex justify-center">
            <div id="zf_div_K3-HSvp28-ghMGM0NDRQiv-6sDJZreHjujhDLc-uJGU" className="w-full max-w-2xl" />
          </div>

          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <h2 className="font-playfair text-2xl font-semibold mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">For all inquiries and correspondence</p>
                      <a
                        href="mailto:info@ramalakshmikumar.com"
                        className="text-primary hover:underline font-medium text-lg"
                      >
                        info@ramalakshmikumar.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-muted-foreground">
                        Ramalakshmi Kumar Trust
                        <br />
                        [Address to be updated]
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <h3 className="font-playfair text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start">
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Apply for Scholarship
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                    <Link href="/support">
                      <Mail className="mr-2 h-4 w-4" />
                      Support the Trust
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-8">
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <h2 className="font-playfair text-2xl font-semibold mb-6">About Our Mission</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Ramalakshmi Kumar Trust is dedicated to empowering underprivileged, talented students through
                    educational support and mentorship.
                  </p>
                  <p>
                    We believe in Smt. Ramalakshmi Kumar's vision that education is the most powerful tool for
                    transformation and the surest path to freedom.
                  </p>
                  <p>
                    Whether you're a student seeking support or someone who wants to contribute to our cause, we welcome
                    you to be part of this meaningful journey.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <h3 className="font-playfair text-xl font-semibold mb-4">Response Time</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>General Inquiries:</span>
                    <span className="font-medium">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scholarship Applications:</span>
                    <span className="font-medium">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support Requests:</span>
                    <span className="font-medium">1-2 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="rounded-lg bg-primary/5 p-8 md:p-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us in continuing Smt. Ramalakshmi Kumar's legacy of compassion and education. Every connection
                matters, every story counts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:info@ramalakshmikumar.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send us an Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/founders-letter">Read Founder's Letter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
