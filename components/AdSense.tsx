export default function AdSense() {
  return (
    <div className="my-8 w-full flex justify-center">
      {/* AD1 */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6772389606110366"
        data-ad-slot="2436076439"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  )
}
