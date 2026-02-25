export default function AdSense() {
  return (
    <div className="my-8 w-full flex justify-center">
      {/*
        AdSense responsive ad unit. Replace data-ad-slot with your own slot id.
        Make sure the <script> tag is included in <head> (already in layout).
      */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6772389606110366"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  )
}
