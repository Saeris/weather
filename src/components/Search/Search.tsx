import React from "react";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";

export const Search: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  const search = async (formData: FormData): Promise<void> => {
    "use server";

    if (formData.has(`zipcode`)) {
      redirect(`/${String(formData.get(`zipcode`))}`);
    }
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={styles.search} action={search}>
      <input
        name="zipcode"
        type="search"
        // https://stackoverflow.com/questions/2577236/regex-for-zip-code
        pattern="^\d{5}(?:[-\s]\d{4})?$"
        placeholder="Search by Zipcode"
      />
    </form>
  );
};
