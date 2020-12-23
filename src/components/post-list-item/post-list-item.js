import './post-list-item.css'

function PostListItem ({title, important, like, onDelete, onImportant, onLike}){
    let classNames = 'list-group-item app-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important'
    }

    if (like) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span 
                className={"app-list-item-label"}
                onClick={onLike}
            >
                {title}
            </span>

            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-star btn-sm"
                    onClick={onImportant}
                >
                    <i className="fa fa-star"></i>
                </button>
                
                <button className="btn-trash btn-sm">
                    <i 
                        className="fa fa-trash-o"
                        onClick={onDelete}
                    ></i>
                </button>
                
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;