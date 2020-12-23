import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header">
            <h1>Your Name</h1>
            <h2>{allPosts} записи, из них {liked} понравилось</h2>
        </div>
    )
}

export default AppHeader;