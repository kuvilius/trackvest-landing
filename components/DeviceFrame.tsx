export default function DeviceFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="device">
      <span className="device-side l1" />
      <span className="device-side l2" />
      <span className="device-side l3" />
      <span className="device-side r" />
      <div className="device-screen">
        <div className="device-island" />
        <div className="device-status" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
