const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img width='75%' src="./images/street-food.jpg" alt="Street Food"/>
                    <div>
                    Image by <a href="https://pixabay.com/users/masashiwakui-4385858/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2014619">Masashi Wakui</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2014619">Pixabay</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home