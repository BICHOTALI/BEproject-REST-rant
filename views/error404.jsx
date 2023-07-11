const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we cant find this page!</p>
                <img src="/images/404error" alt="404 ERROR" />
                <div>
                    <a href="https://www.freepik.com/free-vector/error-404-concept-illustration_7741849.htm#page=2&query=404%20funny&position=37&from_view=keyword&track=ais">Image by storyset</a> on Freepik
                </div>
            </main>
        </Def>
    )
}

module.exports = error404