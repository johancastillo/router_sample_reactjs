correr 

npm install --save react-router-dom

dentro de index.js colocamos el componente App dentro del componente BrowserRouter

```js
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
```

**BrowserRouter** lo que hace es que utiliza el historial de html5 para guardar las rutas que tu has visitado
BrowserRouter va a buscar cualquier componente Route dentro de App y va a mostrarlo o no de acuerdo a la ruta actual del sitio

### dentro de index
Aquellos componentes que deseamos o no mostrar de acuerdo a la url (las páginas) las colocamos dentro del componente
llamado **Route** 

        <Route path="/" component={HomeComp}/>
        <Route path="/pagina1" component={Pagina1Comp}/>
        <Route path="/pagina2" component={Pagina2Comp}/>
        
