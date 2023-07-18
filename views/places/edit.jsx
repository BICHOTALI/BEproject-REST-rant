const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${data.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input 
                            className='form-control' 
                            id='name' 
                            name='name' 
                            defaultValue={data.place.name} 
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture URL</label>
                        <input 
                            className='form-control' 
                            ype="url" 
                            id="pic" 
                            name="pic"
                            defaultValue={data.place.pic}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input 
                            className='form-control' 
                            id="city"
                            name="city"
                            defaultValue={data.place.city} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <select name="state" id="state"
                            defaultValue={data.place.state}>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AR">AR</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Popular Cuisines</label>
                        <input 
                            className='form-control' 
                            id="cuisines" 
                            name="cuisines"
                            defaultValue={data.place.cuisines} 
                            required />
                    </div>
                    <input className='btn btn-primary' type="submit" value='Update' />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form