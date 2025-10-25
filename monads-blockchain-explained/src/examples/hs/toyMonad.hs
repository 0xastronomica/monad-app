module ToyMonad where

-- A simple implementation of a toy monad in Haskell

-- The Monad type class
class Functor m => Monad m where
    return :: a -> m a
    (>>=) :: m a -> (a -> m b) -> m b

-- A simple Maybe-like monad
data Toy a = Nothing | Just a deriving (Show)

instance Functor Toy where
    fmap _ Nothing = Nothing
    fmap f (Just x) = Just (f x)

instance Monad Toy where
    return = Just
    Nothing >>= _ = Nothing
    (Just x) >>= f = f x

-- Example usage of the Toy monad
exampleUsage :: Toy Int
exampleUsage = do
    x <- return 5
    y <- return 10
    return (x + y)