import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";

export const key = "STUDENTS";

export const useStudents = () => {
  const client = useQueryClient();

  const getStudents = () =>
    useQuery({
      queryKey: [key],
      queryFn: () => api.get("/blog").then((res) => res.data),
    });

  const createStudents = useMutation({
    mutationFn: (body: any) => api.post("/blog", body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });
  const deleteStudents = useMutation({
    mutationFn: (id) => api.delete(`/blog/${id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  const updateStudents = useMutation({
    mutationFn: ({ id, body }: { id: number; body: any }) =>
      api.put(`/blog/${id}`, body),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });
  return { getStudents, createStudents, deleteStudents, updateStudents };
};
