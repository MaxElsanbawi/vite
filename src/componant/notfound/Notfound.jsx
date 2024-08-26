import React from "react";
import styles from "./NotFound.module.css";
function NotFound() {

    return (
        <div className="container1  text-center">

            <h1 className=" font-bold text-5xl">404</h1>
            <p className={styles.test} ><strong>File not found</strong></p>

            <p className={styles.test} >
                The site configured at this address does not
                contain the requested file.
            </p>

            
<p className={styles.test} >
If this is your site, make sure that the filename case matches the URL as well as any <br /> file permissions.
</p>
           
<p className={styles.test} >
For root URLs (like http://example.com/) you must provide an index.html file
</p>
<p className={styles.test} > <a href="https://docs.github.com/en/pages">Read the full documentation </a>
for more information about using GitHub Pages.
</p>

<p className={styles.test} ><a href="https://www.githubstatus.com/">GitHub Status</a>___ <a href="https://x.com/githubstatus">@githubstatus</a></p>
<p className={styles.test} >
<i className="fa-brands fa-github text-2xl"></i>
</p>
        </div>
    )
}
export default NotFound