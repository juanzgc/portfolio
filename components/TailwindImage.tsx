import Image from 'next/image'

function TailwindImage({src, alt, className}: {src: string, alt:string, className ?: string}) {
  return (
    <div className={`${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="object-center"
      />
    </div>
  )
}

export default TailwindImage
