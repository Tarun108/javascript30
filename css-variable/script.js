const controls = document.querySelectorAll('.controls input' );

function handleupdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
}

controls.forEach(input => input.addEventListener('change', handleupdate));
controls.forEach(input => input.addEventListener('mousemove', handleupdate));
// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  