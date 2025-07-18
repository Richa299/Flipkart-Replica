type ButtonProp = {
  label?: string;
  icon: any;
};
export default function Button({ label, icon }: ButtonProp) {
  // let Icons = import("react-icons/io5");
  // console.log(props);
  return (
    <div>
      <button>
        {
          icon ? (
            label ? (
              <>
                <span>{icon}</span>
                <span>{label}</span>
              </>
            ) : (
              <span>{icon}</span>
            )
          ) : (
            <></>
          )
          //   icon ? (
          //     <>
          //       <span>{label}</span> <span>{icon}</span>
          //     </>
          //   ) : (
          //     <span>{label}</span>
          //   )
          // ) : (
          //   <span>{label}</span>
          // )
        }
      </button>
    </div>
  );
}
