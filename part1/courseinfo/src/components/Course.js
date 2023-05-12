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

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course