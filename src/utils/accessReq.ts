import axiosInstance from "./axiosInstance"

export const accessReq = async (id: string) => {
    try {

        const res = await axiosInstance.get(
            `workspace/access/request`,
            {
                params: {
                    workspaceId: id,
                },
            }
        )

        return res.data

    }
    catch (e) {
        console.error(e)
        throw e
    }
}