import { RootState } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Use these hooks everywhere instead of useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
