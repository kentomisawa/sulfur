export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'create_account' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'create_regulation' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], []),
    'create_verification' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Bool, IDL.Text, IDL.Text, IDL.Text],
        [],
        [],
      ),
    'get_account' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'name' : IDL.Text,
            'edges' : IDL.Vec(
              IDL.Record({ 'to' : IDL.Text, 'labels' : IDL.Vec(IDL.Text) })
            ),
            'verifications' : IDL.Vec(IDL.Text),
          }),
        ],
        [],
      ),
    'get_regulation' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'owner' : IDL.Text,
            'name' : IDL.Text,
            'edges' : IDL.Vec(
              IDL.Record({ 'to' : IDL.Text, 'labels' : IDL.Vec(IDL.Text) })
            ),
          }),
        ],
        [],
      ),
    'get_verification' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'verified' : IDL.Bool,
            'verifier' : IDL.Text,
            'regulation' : IDL.Text,
            'name' : IDL.Text,
            'edges' : IDL.Vec(
              IDL.Record({ 'to' : IDL.Text, 'labels' : IDL.Vec(IDL.Text) })
            ),
          }),
        ],
        [],
      ),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
