import styles from './Button.module.css'

function Button(props){
const {onClick,children,title,disabled=false}=props
 return <button  className={styles.button}
 {...props}
 onClick={onClick}
 title={title}
 disabled={disabled}
 >{children}
 </button>
}

export default Button