const test = () => {
  const saludo = 'hola'

  saludo
  .toLocaleLowerCase()

  return (
    <div>
      <h1
       className="test01 test02"
       onClick={() => console.log('hola')}
      >
        {saludo}
      </h1>
      <button value={saludo} />
      <button
       value={saludo}
      />
    </div>
  )
}

export default test
