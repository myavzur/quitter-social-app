import './app.css';
import React, {Component} from 'react'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostList from '../post-list/post-list'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostAddForm from '../post-add-form/post-add-form'

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [
                {
                    title: 'あなたの人生に幸運を祈ります',
                    important: false,
                    like: false,
                    id: "fgklkl34934jksd"
                },
                {
                    title: "Click on me to like this post",
                    important: false,
                    like: false,
                    id: "jldxfjkdfkj23342"
                },
                {
                    title: "Also try to search posts by their title / filter them",
                    important: false,
                    like: false,
                    id: "dcfgdfd334"
                },
                {
                    title: "Or add something from the bottom form",
                    important: false,
                    like: false,
                    id: "ghghrtert322"
                },
                {
                    title: "Keep in mind, you're able delete everything of this posts by clicking on trash cans",
                    important: true,
                    like: true,
                    id: "r45cvvsd"
                }
            ], 
            
            searchTerm: '',
            filter: 'all'
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

        this.toggleImportant = this.toggleImportant.bind(this)
        this.toggleLike = this.toggleLike.bind(this)

        this.onSearch = this.onSearch.bind(this)
        this.onFilter = this.onFilter.bind(this)
    }  

    deleteItem(id) {      
        this.setState( ({posts}) => {
            const index = posts.findIndex(post => id === post.id);

            const beforeId = posts.slice(0, index);
            const afterId = posts.slice(index + 1, posts.length);
            const newData = [...beforeId, ...afterId];

            return {
                posts: newData
            }
        });
    }

    addItem(title, id) {        
        this.setState( ({posts}) => {
            const newPost = {
                title: title,
                like: false,
                important: false,
                id: id
            }
            const newArr = [...posts, newPost];
            
            return {
                posts: newArr
            }
        })
    }


    toggleImportant(id) {   
        this.setState( ({posts}) => {
            const index = posts.findIndex(post => post.id === id);

            const newArr = [...posts];
            newArr[index] = {...newArr[index], important: !posts[index].important}

            return {
                posts: newArr
            }
        })    
    }

    toggleLike(id) {
        this.setState( ({posts}) => {
            const index = posts.findIndex(post => id === post.id);

            const newArr = [...posts];
            newArr[index] = {...newArr[index], like: !newArr[index].like}

            return {
                posts: newArr
            }
        })  
    }

    searchPosts(arr, pattern) {
        if (pattern.length === 0) {
            return arr;
        }

        return arr.filter(item => {
            return item.title.indexOf(pattern) !== -1
        })
    }

    onSearch(pattern) {
        this.setState({
            searchTerm: pattern
        })
    }


    filterPosts(arr, filter) {
        switch (filter) {
            case 'all':
                return arr

            case 'like':
                return arr.filter(item => item.like)
            
            default: 
                return arr;
        }
    }

    onFilter(filter) {
        this.setState({filter})
    }
    

    render() {
        const {posts, searchTerm, filter} = this.state;

        const allPosts = posts.length;
        const liked = posts.filter(post => post.like).length;

        const visiblePosts = this.filterPosts(this.searchPosts(posts, searchTerm), filter);

        return (
            <div className="app">
                <AppHeader
                    allPosts={allPosts}
                    liked={liked}
                />

                <div className="search-panel d-flex">
                    <SearchPanel
                        onSearch={this.onSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilter={this.onFilter}

                    />
                </div>

                <PostList 
                    posts={visiblePosts}

                    onDelete={this.deleteItem}
                    onLike={this.toggleLike}
                    onImportant={this.toggleImportant}
                />

                <PostAddForm
                    onSubmit={this.addItem}
                />
            </div>
        )
    }
}

export default App;