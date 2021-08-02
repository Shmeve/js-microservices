
/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const u1 = new User();
const c1 = new Company();

const customMap = new CustomMap('map');

customMap.addMarker(u1);
customMap.addMarker(c1);