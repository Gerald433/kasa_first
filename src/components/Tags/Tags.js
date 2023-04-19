import React, { useEffect, useState } from "react";
import styles from "./Tags.module.css";

const Tags = function ({ tags }) {
  console.log(tags);
  return (
    <div className={styles.note}>
      <ul className={styles.advantageList}>
        {tags.map((tag) => (
          <li className={styles.advantage}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
