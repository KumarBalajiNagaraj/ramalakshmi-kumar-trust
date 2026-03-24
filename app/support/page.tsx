"use client"

import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import { useEffect } from "react"
import { Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="ml-2 inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs text-[#C9A84C] border border-[#C9A84C]/30 hover:bg-[#FFF9EF] transition-colors"
    >
      {copied ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

export default function SupportPage() {
  useEffect(() => {
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
                    if(ifrmSrc.indexOf('?') > 0){ ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal; }
                    else{ ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal; }
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
                    if(ifrmSrc.indexOf('?') > 0){ ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal; }
                    else{ ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal; }
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
          if(d) { d.appendChild(f); }
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
                  if( zf_ifrm_data.length == 3 ) { iframe.scrollIntoView(); zf_tout = true; }
                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) { setTimeout(function(){ iframe.style.height = zf_ifrm_ht_nw; },500); }
                    else { iframe.style.height = zf_ifrm_ht_nw; }
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

          {/* Page header */}
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
              Make a Difference
            </p>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#181818]">
              Support the Trust
            </h1>
            <p className="mt-3 text-sm md:text-base text-[#858483] max-w-xl mx-auto">
              Your contribution empowers talented students who are stopped only by poverty —
              and nourishes communities across Tenkasi and Tirunelveli.
            </p>
          </div>

          {/* ─── UPI / Quick Pay ───────────────────────────────────── */}
          <div className="mb-8 rounded-xl border border-[#C9A84C]/30 bg-white shadow-sm overflow-hidden">
            {/* Gold header bar */}
            <div className="bg-[#C9A84C] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-0.5">
                Quickest Way to Give
              </p>
              <h2 className="font-playfair text-xl font-bold text-white">
                Pay via UPI — Instant &amp; Secure
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">

                {/* QR Code */}
                <div className="flex-shrink-0 text-center">
                  <div className="inline-block rounded-2xl border-2 border-[#C9A84C]/30 bg-[#FFF9EF] p-3 shadow-sm">
                    <Image
                      src="/upi_qr.jpg"
                      alt="UPI QR Code — Ramalakshmi K"
                      width={200}
                      height={200}
                      className="rounded-xl"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-xs text-[#858483]">Scan with any UPI app</p>
                  <p className="text-xs text-[#858483]">GPay · PhonePe · Paytm · BHIM</p>
                </div>

                {/* UPI Details */}
                <div className="flex-1 w-full space-y-5">
                  <div>
                    <p className="text-xs text-[#858483] uppercase tracking-widest mb-1">Recipient</p>
                    <p className="font-playfair text-xl font-bold text-[#181818]">Ramalakshmi K</p>
                    <p className="text-xs text-[#858483] mt-0.5">Ramalakshmi Kumar Trust</p>
                  </div>

                  <div>
                    <p className="text-xs text-[#858483] uppercase tracking-widest mb-1">UPI ID</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-mono text-base font-semibold text-[#181818] bg-[#FFF9EF] border border-[#C9A84C]/25 rounded-lg px-3 py-2">
                        ramalakshmikumar65@okhdfcbank
                      </p>
                      <CopyButton text="ramalakshmikumar65@okhdfcbank" />
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#FFF9EF] border border-[#C9A84C]/20 p-4 text-sm text-[#434343] space-y-1.5">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      Open GPay, PhonePe, Paytm or any UPI app
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      Scan the QR or enter the UPI ID above
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      Add a note: <em>"Ramalakshmi Kumar Trust"</em>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      Every rupee is documented — receipt on request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Transparency Pledge ───────────────────────────────── */}
          <div className="mb-8 rounded-xl border border-[#C9A84C]/30 bg-[#FFF9EF] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
              Our Pledge
            </p>
            <h2 className="font-playfair text-xl font-bold text-[#181818] mb-4">
              100% Transparency — Always
            </h2>
            <div className="space-y-3 text-sm md:text-base text-[#434343]">
              <p>Every rupee you donate is carefully tracked and we provide detailed reports on how funds are utilised.</p>
              <p>
                <strong className="text-[#181818]">We do NOT make direct payments to individuals.</strong>{" "}
                All financial support is made directly to verified educational institutions or registered
                welfare entities — fully documented.
              </p>
              <p>
                Request expense reports &amp; payment proofs anytime:{" "}
                <a href="mailto:info@ramalakshmikumar.com" className="text-[#C9A84C] hover:underline font-medium">
                  info@ramalakshmikumar.com
                </a>
              </p>
            </div>
          </div>

          {/* ─── Bank Transfer ─────────────────────────────────────── */}
          <div className="mb-8 rounded-xl border border-[#E5E5E5] bg-white p-6 md:p-8 shadow-sm">
            <h2 className="font-playfair text-xl font-semibold text-[#181818] mb-6">
              Bank Transfer Details
            </h2>
            <div className="grid gap-4">
              {[
                { label: "Bank Name", value: "HDFC Bank, Kelambakkam Branch" },
                { label: "Account Number", value: "50200114105944", copy: true },
                { label: "IFSC Code", value: "HDFC0002075", copy: true },
                { label: "MICR Code", value: "784240102" },
                { label: "Customer ID", value: "335906317" },
              ].map(({ label, value, copy }) => (
                <div key={label} className="flex items-start justify-between border-b border-[#E5E5E5] pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-xs text-[#858483] uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="font-semibold text-[#181818]">{value}</p>
                  </div>
                  {copy && <CopyButton text={value} />}
                </div>
              ))}
              <div className="pt-1">
                <p className="text-xs text-[#858483] uppercase tracking-wide mb-1">Trustee / Account Name</p>
                <p className="font-semibold text-[#181818]">Kumar B</p>
                <p className="text-xs text-[#858483] mt-0.5">Retired Educator, SSN MBA Department</p>
                <p className="text-xs text-[#C9A84C] font-medium mt-0.5">Managing Trustee, Ramalakshmi Kumar Trust</p>
              </div>
              <div className="pt-1">
                <p className="text-xs text-[#858483] uppercase tracking-wide mb-0.5">Trust Registration Number</p>
                <p className="font-semibold text-[#181818] font-mono">BK-4/184/2025</p>
              </div>
            </div>
          </div>

          {/* ─── Zoho Form ─────────────────────────────────────────── */}
          <div className="mb-8 flex justify-center">
            <div id="zf_div_N0NeUch8r5agacap8WfMFAnjWnpNaClaankSbHXJ46E" className="w-full" />
          </div>

        </div>
      </main>
    </div>
  )
}
