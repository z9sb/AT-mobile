import style from './feed.module.css'
import Post from './Post.jsx'

export default function Feed({ postInfo }) {
  return (
    <div className={style.feedContainer}>
        {console.log(postInfo)}
      <div className={style.feed}>
        {Object.values(postInfo).map((e, index) => (
          <Post key={index} propiedade={e} />
        ))}
      </div>
    </div>
  );
}
