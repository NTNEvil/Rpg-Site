function SideMenu() {
    return (
<div className="Side">
<svg onClick={SideMenu} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
<ul>
    <li>Home</li>
    <li>Roleta</li>
    <li>Usuario</li>
    <li>Inventario</li>
    <li>Monstruario</li>
    <li>Cards</li>
    <li>Parceiros</li>
</ul>
</div>
    );
    function SideMenu(){
        document.querySelector('.Side').style.transform = 'translateX(-500px)'
        document.querySelector('.Side').style.height = '100vh'
        document.querySelector('.Side').style.animation = 'slide-out-bck-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    }
  }
  
  export default SideMenu;
  