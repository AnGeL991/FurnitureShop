import React from 'react';
import styles from './blog.module.scss';
import Container from '../../layout/container/container';
import Header from '../../common/headerTitle/header';
import Post from '../../features/post/post';



const Blog =()=>{

    return(
        <div className={styles.page}>
             <Header
          fontSize="34px"
          textAlign="left"
          fontWeight="300"
          margin="20px 140px "
        >
          Blog
        </Header>
            <Container>
           <section id="sectionPosts" className={styles.posts}>
               <Post/>
               <Post/>
               
           </section>
            </Container>

        </div>
    )
}


export default Blog;