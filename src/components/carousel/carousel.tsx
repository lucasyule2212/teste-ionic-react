export default function Carousel({
  items,
  isLoading
}: {
  items: any[]
  isLoading: boolean
}) {
  return (
    <div className="h-fit w-full p-4">
      <h1 className="ml-2 text-3xl font-semibold text-zinc-700 underline decoration-ionic decoration-solid dark:text-white">
        Em destaque
      </h1>
      <div className="carousel carousel-center mt-2 w-full space-x-4">
        {items &&
          items.map((item, index) => (
            <div
              key={item.id}
              id={`slide${index + 1}`}
              className="carousel-item max-w-md "
            >
              <img src={item.poster_path} className="w-full rounded-box" />
            </div>
          ))}
      </div>
    </div>
  )
}
