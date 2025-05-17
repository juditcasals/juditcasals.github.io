// aquesta línea updatea el valor de la variable --hover-bg-hue, com que si fos:
// :root {
//   --hover-bg-hue: <el_valor_de_hue>
// }
const updateHoverHue = (hue) => document.documentElement.style.setProperty('--hover-bg-hue', hue);

// aquesta part selecciona tots els elements que tinguin [data-bg-hue]
// i fa que la variable --hover-bg-hue s'actualitzi amb el seu valor de hue
// quan posem el mouse a sobre o quan fem focus amb la tecla 'tab'
document.querySelectorAll('[data-bg-hue]').forEach(el => {
    el.addEventListener('pointerenter', () => updateHoverHue(el.dataset.bgHue));
    el.addEventListener('focus', () => updateHoverHue(el.dataset.bgHue));
})