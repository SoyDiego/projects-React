import { graphql, useStaticQuery } from "gatsby"

const useSEO = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  
  return data.datoCmsSite.globalSeo;

}

export default useSEO
