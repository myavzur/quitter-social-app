import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header">
            <h1>Maxim Filatov</h1>
            <h2><span className="app-header-value">{allPosts}</span> posts, you liked <span className="app-header-value">{liked}</span> of them</h2>
        </div>
    )
}

export default AppHeader;