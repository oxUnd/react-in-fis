import {Title} from './module/title.jsx';
import {Nav} from './module/nav.jsx';

React.render(
    <div>
        <Title> React box title </Title>
        <Nav />
        <p>
            Hello, World
        </p>
    </div>
    ,
    document.getElementById('box')
);
