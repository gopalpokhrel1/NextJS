

export default function page({params}) {
  return (
    <div>
        <h1>{params.lecture[0]}</h1>
        <h2>{params.lecture[1]}</h2>
    </div>
  )
}
