const Advice = ({advice}) => {
  return (
    <div>
        <p>
      {advice}
        </p>
        <button>Click</button>
        <button data-testid='advice-button'>Button with id</button>
    </div>
  )
}

export default Advice
