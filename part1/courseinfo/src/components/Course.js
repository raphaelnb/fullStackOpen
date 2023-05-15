const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}
  
const Part = ({ name, exercises}) => {
    console.log(name, exercises)
    return (
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
}
  
const Content = ({ parts }) => {
    console.log(parts)
    return (
      <div>
        {
            parts.map((part, i) =>
                <Part key={i} name={part.name} exercises={part.exercises} />    
            )
        }
      </div>
    )
}

const Total = ({ total }) => {    
  console.log(total)
    
  const x = total.map(n => n.exercises)

  return (
    <div>
      <p>Number of exercises {x.reduce((a,p) => a + p, 0)} </p>
    </div>
  )
}
  
const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total total={course.parts} />
        </div>
    )
}

export default Course