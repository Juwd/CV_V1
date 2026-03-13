import imgSlide011 from "figma:asset/ee7d983722c8fbf057aac9cbc7dc9d84bf325889.png";

export default function Thumbnail() {
  return (
    <div className="relative size-full" data-name="Thumbnail">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2000px] left-1/2 top-1/2 w-[3000px]" data-name="Slide 01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlide011} />
      </div>
    </div>
  );
}