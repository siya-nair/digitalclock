function tick()
{
  const clock=(
  <div>
      <h1> Digital Clock</h1>
      <h2> Current Local Time is {new Date().toLocaleTimeString()}</h2>
</div>  
  );

  ReactDOM.render(clock, document.getElementById('root'));
  
}
setInterval(tick, 1000);

