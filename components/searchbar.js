import style from '../styles/searchbar.module.css'

export default function Searchbar(props) {
    return (
            <form action="/search" method="get" className="shadow-md rounded searchbar searchbackground">
                <label className="flex items-center p-1 w-full">
                    <input className="p-3 w-full outline-none searchbackground" placeholder="Skurkebakken 1 Andeby" name="address" defaultValue={props.query} autoFocus spellCheck="false" />
                    <button className="align-right p-3 h-12 w-12" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"/></svg>
                    </button>
                </label>
            </form>
    )
}
