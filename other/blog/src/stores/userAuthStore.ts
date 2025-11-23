import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export const useAuthStore = create<AuthStore>()(
	devtools(
		persist(
			(set) => ({
				user: null,
				accessToken: null,
				setAuth: (user, accessToken) => set({ user, accessToken }),
				unsetAuth: () => set({ user: null, accessToken: null }),
			}),
			{
				name: "auth-storage",
				storage: createJSONStorage(() => sessionStorage), // 기본 값: 로컬 스토리지
				partialize: (state) => ({
					user: state.user,
				}), // user만 세션 스토리지에 저장
			}
		)
	)
);
