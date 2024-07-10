type titleMeta = {title: string}
type contentMeta = {name: string, content: string}

type sererRuntimeMetaDescriptor =
  | TitleMeta(titleMeta)
  | ContentMeta(contentMeta)

let meta: unit => array<sererRuntimeMetaDescriptor> = () => {
  [
    TitleMeta({title: "New Remix App"}),
    ContentMeta({name: "description", content: "Welcome to Remix!"}),
  ]
}

@react.component
let default = () => {
  <div className="font-sans p-4">
    <h1 className="text-3xl"> {"Welcome to Remix"->React.string} </h1>
    <ul className="list-disc mt-4 pl-6 space-y-2">
      <li>
        <a
          className="text-blue-700 underline visited:text-purple-900"
          target="_blank"
          href="https://remix.run/start/quickstart"
          rel="noreferrer">
          {"5m Quick Start"->React.string}
        </a>
      </li>
      <li>
        <a
          className="text-blue-700 underline visited:text-purple-900"
          target="_blank"
          href="https://remix.run/start/tutorial"
          rel="noreferrer">
          {"30m Tutorial"->React.string}
        </a>
      </li>
      <li>
        <a
          className="text-blue-700 underline visited:text-purple-900"
          target="_blank"
          href="https://remix.run/docs"
          rel="noreferrer">
          {"Remix Docs"->React.string}
        </a>
      </li>
    </ul>
  </div>
}
