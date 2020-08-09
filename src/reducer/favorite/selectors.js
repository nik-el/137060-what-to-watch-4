import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FAVORITE;

export const getLoadingSettingFavoriteStatus = (state) => state[NAME_SPACE].loadingFavoritesData;
export const getFavorites = (state) => state[NAME_SPACE].favorites;

