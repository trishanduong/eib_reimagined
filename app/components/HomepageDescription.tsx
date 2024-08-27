import CardComponent from "./CardComponent";

export function HomepageDescription(){

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 py-40">
        <CardComponent
          icon={<span role="img" aria-label="payroll">🧾</span>}
          title="CUSTOMERS ARE OUR FOCUS"
          description="We are here for you and are ready to answer your questions."
        />
        <CardComponent
          icon={<span role="img" aria-label="database">👥</span>}
          title="WE ARE READY FOR YOUR BUSINESS"
          description="Learn about what we have to offer."
        />
        <CardComponent
          icon={<span role="img" aria-label="onboarding">👍</span>}
          title="WE WILL HELP YOU GROW YOUR BUSINESS"
          description="We are here to help you achieve your dreams."
        />
        <CardComponent
          icon={<span role="img" aria-label="onboarding">👍</span>}
          title="SIMPLIFY YOUR BANKING"
          description="Learn about our Online Banking features."
        />
      </div>
  )
}