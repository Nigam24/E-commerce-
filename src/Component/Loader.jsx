import { useLoaderStore } from  "../services/lib/zustand"
import styles from "./Loader.css"

import {
  DNA,
} from "react-loader-spinner";

export default function Loader() {
  const { loading } = useLoaderStore();
  return loading ? (
    <div className={styles.fullscreen_center}>
      <DNA  visible={true}  height="120"  width="120"  ariaLabel="dna-loading"  wrapperStyle={{}}  wrapperClass="dna-wrapper"  />
    </div>
  ) : null;
}