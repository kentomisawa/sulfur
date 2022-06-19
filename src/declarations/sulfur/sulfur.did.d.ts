import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'create_account' : ActorMethod<[string, string], undefined>,
  'create_regulation' : ActorMethod<[string, string, string], undefined>,
  'create_verification' : ActorMethod<
    [string, string, boolean, string, string, string],
    undefined,
  >,
  'get_account' : ActorMethod<
    [string],
    {
      'name' : string,
      'edges' : Array<{ 'to' : string, 'labels' : Array<string> }>,
      'verifications' : Array<string>,
    },
  >,
  'get_regulation' : ActorMethod<
    [string],
    {
      'owner' : string,
      'name' : string,
      'edges' : Array<{ 'to' : string, 'labels' : Array<string> }>,
    },
  >,
  'get_verification' : ActorMethod<
    [string],
    {
      'verified' : boolean,
      'verifier' : string,
      'regulation' : string,
      'name' : string,
      'edges' : Array<{ 'to' : string, 'labels' : Array<string> }>,
    },
  >,
  'greet' : ActorMethod<[string], string>,
}
