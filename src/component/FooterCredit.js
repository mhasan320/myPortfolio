import SourceCode from "./SourceCode";

export default function FooterCredit() {
  return (
    <div className="relative dark:bg-indigo-800 dark:text-white bg-purple-100 z-50">
      <div className="container mx-auto text-center md:text-left py-5">
        <p className="text-center">
          © copyright 2024 <span>Mahmudul Hasan</span>. All Rights Reserved.
        </p>
      </div>
      <SourceCode />
    </div>
  );
}
