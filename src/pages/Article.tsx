import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useConfig } from '../ConfigContext'

type Article = {
  id: number
  attributes: {
    title: string
    content?: string
    meta_description?: string
    seo_title?: string
  }
}

const ArticlePage: React.FC<{ slug: string }> = ({ slug }) => {
  const { apiBaseUrl, cmsSiteId } = useConfig()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    if (!apiBaseUrl) {
      setLoading(false)
      setError('Missing apiBaseUrl in config')
      return
    }

    const url = new URL('/api/articles', apiBaseUrl)
    url.searchParams.set('filters[slug][$eq]', slug)
    // For Strapi v4, populate to get SEO/meta fields
    url.searchParams.set('populate', '*')
    if (cmsSiteId) {
      // Example: filter by site id if your schema supports it
      url.searchParams.set('filters[siteId][$eq]', cmsSiteId)
    }

    fetch(url.toString())
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const first = Array.isArray(data?.data) ? data.data[0] : null
        setArticle(first ?? null)
        setLoading(false)
      })
      .catch((err) => {
        setError(String(err))
        setLoading(false)
      })
  }, [apiBaseUrl, cmsSiteId, slug])

  const title = article?.attributes?.seo_title || article?.attributes?.title || 'Article'
  const description = article?.attributes?.meta_description || 'Article details'

  return (
    <section className="container mx-auto px-4 py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {loading && (
        <p className="text-gray-600">Loading article...</p>
      )}

      {error && (
        <div className="text-red-600">Failed to load article: {error}</div>
      )}

      {!loading && !error && article && (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-dark mb-6">{article.attributes.title}</h1>
          {article.attributes.content ? (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.attributes.content }} />
          ) : (
            <p className="text-gray-600">No content provided.</p>
          )}
        </div>
      )}
    </section>
  )
}

export default ArticlePage