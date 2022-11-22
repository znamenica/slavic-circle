import {NewsItemResponse, NewsItemsResponse, NewsTag} from "./news";

const Api = {
    news: {
        getAll(params: any): Promise<NewsItemsResponse> {
            const searchParams = new URLSearchParams();
            if (params.page) {
                searchParams.append("p", params.page);
            }
            if (params.count) {
                searchParams.append("per", params.count);
            }
            searchParams.append(`by_tags[]`, NewsTag.INTERSLAVIC_CIRCLE);
            searchParams.set("sort", "created_at:desc");
            return fetch(`${process.env.NEXT_PUBLIC_API}/news.json?${searchParams.toString()}`)
                .then(res => {
                    if (res.status === 403) {
                        return {
                            items: [],
                            needAuth: true,
                        };
                    }
                    return res.json()
                })
                .then(data => ({
                    items: data.list,
                    needAuth: false,
                }));
        },
        getById(id: number): Promise<NewsItemResponse> {
            return fetch(`${process.env.NEXT_PUBLIC_API}/news/${id}.json`)
                .then(res => {
                    if (res.status === 403) {
                        return {
                            item: null,
                            needAuth: true,
                        };
                    }
                    return res.json()
                })
                .then(data => ({
                    item: data,
                    needAuth: false,
                }));
        },
    },
};

export default Api;
