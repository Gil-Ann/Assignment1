import RegForm from './views/RegForm';
import Quiz from './views/Quiz';

export default[
    {
        path:'/',
        redirect: 'registration'
    },
    {
        path:'/registration',
        component: RegForm
    },
    {
        path:'/quiz/:fname/:lname/:avatar',
        component: Quiz,
        props: true
    },
    {
        path: '*',
        redirect: 'registration'
    }
]