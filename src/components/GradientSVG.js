function GradientSVG({type}) {
  
  const idCSS = "hello";
  const gradientTransform = `rotate(110)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
       {type === 'completed' ? <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="19.29%" stopColor="#708EF7" />
          <stop offset="95.56%" stopColor="#5C00BF" />
        </linearGradient> : 
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
        <stop offset="19.29%" stopColor="#B93A28" />
      </linearGradient> }
      </defs>
    </svg>
  );
}

export default GradientSVG;
